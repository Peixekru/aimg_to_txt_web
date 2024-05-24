<!-- Componente de template -->
<template>
	<!-- Componente de carregamento completo -->
	<FullLoader v-if="isFullLoading" />
	<!-- Componente de login do usuário -->
	<UserLogin />
	<!-- Componente de confirmação de logout -->
	<LogoutConfirm ref="logoutConfirm" />

	<!-- Botão de logout -->
	<button class="logout-btn fadeIn" @click="changeChildMessage">Logout</button>

	<!-- Componente de loading -->
	<Loading ref="isLoading" />

	<!-- Contêiner principal -->
	<div class="group-container">
		<!-- Condição para exibir o ícone de início -->
		<div v-if="resultText == ''">
			<!-- Ícone de início desligado se nenhum arquivo estiver selecionado -->
			<IconStart v-if="selectedFile == null" class="fadeIn" :icon="faToggleOff" size="2x" color="grey" />
			<!-- Ícone de início ligado se um arquivo estiver selecionado -->
			<IconStart v-else class="fadeIn" :icon="faToggleOn" size="2x" color="blueviolet" />
		</div>

		<!-- Imagem de referência -->
		<div class="img-ref fadeIn">
			<!-- Mostra a imagem se a URL estiver disponível -->
			<img v-if="resultText != ''" class="img-placeholder-ref" :src="imageUrl" alt="Imagem" />
		</div>

		<!-- Título exibido quando há texto resultante -->
		<h2 v-if="resultText != ''" class="title-box">
			<span class="icon-pos fadeIn">
				<!-- Ícone de marca de seleção -->
				<IconStart :icon="faCheck" size="1x" color="green" />
			</span>
			Descrição da imagem.
		</h2>

		<!-- Área de soltar arquivo -->
		<div v-if="resultText == ''" class="drop-area fadeIn" @dragover.prevent @drop="handleDrop"
			@click="triggerFileInput">
			<!-- Campo de entrada de arquivo oculto -->
			<input type="file" accept="image/*" ref="fileInput" @change="handleFileSelect" style="display: none;" />
			<!-- Mostra a imagem se a URL estiver disponível, senão exibe um texto de placeholder -->
			<img v-if="imageUrl" class="img-placeholder fadeIn" :src="imageUrl" alt="Imagem" />
			<span v-else class="placeholder-txt fadeIn">Arraste e solte sua imagem aqui ou clique para
				selecionar!</span>
		</div>

		<!-- Botão para converter imagem em texto -->
		<button v-if="imageUrl && resultText == ''" class="form-btn-send fadeIn" @click="run">
			Descrever imagem em texto.
		</button>

		<!-- Texto resultante da conversão ou área de texto para edição em bullets
		<div class="fadeIn" :class="resultText != '' ? ' result-text' : ''">
			<div v-if="!isEditing">
				<p v-for="(text, index) in resultText" :key="index">{{ text }}</p>
			</div>
			<div v-else>
				<textarea v-model="editableText" class="edit-area"></textarea>
			</div>
		</div> -->

		<!-- Texto resultante da conversão ou área de texto para edição em parágafo-->
		<div class="fadeIn" :class="resultText != '' ? ' result-text' : ''">
			<div v-if="!isEditing">
				<p>{{ resultText[0] }}</p>
			</div>
			<div v-else>
				<textarea v-model="editableText" class="edit-area"></textarea>
			</div>
		</div>

		<!-- Botões para ações quando há texto resultante -->
		<div v-if="resultText != ''" class="form-btn-container">
			<!-- Botão para copiar o texto gerado -->
			<button class="form-btn-copy" @click="copyText">
				<IconStart :icon="faCheck" size="1x" :color="copyIcon.iconName == 'check' ? 'greenyellow' : 'white'" />
				<span :class="copyIcon.iconName == 'check' ? 'btn-copy-txt-green' : 'btn-copy-txt'">copy</span>
			</button>

			<!-- Botão para alternar entre visualização e edição -->
			<button v-if="!isEditing" class="form-btn-edit fadeIn" @click="toggleEdit">
				<IconStart :icon="faEdit" size="1x" color="white" />
				<span class="btn-copy-txt">edit</span>
			</button>
			<button v-else class="form-btn-edit fadeIn" @click="toggleEdit">
				<IconStart :icon="faCheck" size="1x" color="white" />
				<span class="btn-copy-txt">ok</span>
			</button>
		</div>

		<!-- Botão para iniciar nova conversão -->
		<button v-if="resultText != ''" class="form-btn-clear fadeIn" @click="clearResult">
			Descrever outra imagem.
		</button>
	</div>
</template>

<!-- Configuração do script -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { auth } from './firebase/config.js';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import Loading from "./components/Loading.vue";
import FullLoader from "./components/FullLoader.vue";
import UserLogin from "./components/UserLogin.vue";
import LogoutConfirm from "./components/LogoutConfirm.vue";

import IconStart from "./components/icons/IconStart.vue";
import {
	faCheck,
	faToggleOn,
	faToggleOff,
	faCopy,
	faEdit,
} from '@fortawesome/free-solid-svg-icons';

// Cria uma referência para o componente filho
const logoutConfirm = ref(null);

// Configurações do modelo e chave da API Gemini
const MODEL_NAME = "gemini-1.0-pro-vision-latest";
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Configurações de geração de texto
const generationConfig = {
	temperature: 0.3,
	topK: 35,
	topP: 0.5,
	maxOutputTokens: 4096,
};

// Configurações de segurança
const safetySettings = [
	{
		category: HarmCategory.HARM_CATEGORY_HARASSMENT,
		threshold: HarmBlockThreshold.BLOCK_NONE,
	},
	{
		category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
		threshold: HarmBlockThreshold.BLOCK_NONE,
	},
	{
		category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
		threshold: HarmBlockThreshold.BLOCK_NONE,
	},
	{
		category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
		threshold: HarmBlockThreshold.BLOCK_NONE,
	},
];


// Declaração de variáveis reativas
const user = ref(null);
const isFullLoading = ref(false);
const isLoading = ref(null);
const selectedFile = ref(null);
const resultText = ref('');
const imageUrl = ref(null);
const isEditing = ref(false);
const editableText = ref('');
const copyIcon = ref(faCopy);

// Funções para iniciar e parar o loading
const startLoading = () => isLoading.value.showLoading();
const stopLoading = () => isLoading.value.hideLoading();

// Função para limpar os resultados e reiniciar o processo
const clearResult = () => {
	selectedFile.value = null;
	resultText.value = '';
	imageUrl.value = null;
	isEditing.value = false;
	copyIcon.value = faCopy;
};

// Função para lidar com o evento de soltar uma imagem na área designada
const handleDrop = (event) => {
	event.preventDefault();
	const file = event.dataTransfer.files[0];
	selectedFile.value = file;
	// Verifica se o arquivo é uma imagem
	if (file.type.startsWith('image/')) {
		imageUrl.value = URL.createObjectURL(file);
	} else {
		alert('Por favor, selecione um arquivo de imagem.');
	}
};

// Função para lidar com a seleção de um arquivo
const handleFileSelect = (event) => {
	const file = event.target.files[0];
	selectedFile.value = file;
	if (file.type.startsWith('image/')) {
		imageUrl.value = URL.createObjectURL(file);
	} else {
		alert('Por favor, selecione um arquivo de imagem.');
	}
};

// Função para abrir o seletor de arquivos
const triggerFileInput = () => {
	const fileInput = document.querySelector('input[type="file"]');
	fileInput.click();
};

// Função para copiar o texto gerado
const copyText = () => {
	const textToCopy = resultText.value.join('\n');
	navigator.clipboard.writeText(textToCopy).then(() => {
		// Altera o ícone para o ícone de verificação após a cópia
		copyIcon.value = faCheck;
	}).catch(err => {
		console.error('Erro ao copiar o texto: ', err);
	});
};

// Função para alternar entre visualização e edição
const toggleEdit = () => {
	isEditing.value ?
		resultText.value = editableText.value.split('\n') :
		editableText.value = resultText.value.join('\n');

	// Inverte o estado ente visualização e edição
	isEditing.value = !isEditing.value;

	// Altera o ícone para o ícone de cópia após a edição
	copyIcon.value = faCopy;
};

// Função para abrir o modal de confirmação do logout. modificar a variável do filho
const changeChildMessage = () => {
	logoutConfirm.value.showOverlay = true;
};

// Função para executar a conversão da imagem em texto
const run = async () => {

	// Inicia o loading
	startLoading();

	const genAI = new GoogleGenerativeAI(API_KEY);
	const model = genAI.getGenerativeModel({ model: MODEL_NAME });

	// Verifica se um arquivo foi selecionado
	if (!selectedFile.value) {
		throw new Error("Por favor, selecione um arquivo de imagem.");
	}

	// Lê o arquivo como URL
	const reader = new FileReader();
	reader.readAsDataURL(selectedFile.value);
	reader.onload = async () => {
		const parts = [
			{ text: import.meta.env.VITE_GEMINI_CONSOLE_TEXT },
			{
				inlineData: {
					mimeType: "image/jpeg",
					data: reader.result.split(',')[1]
				}
			},
		];

		// Faz a requisição ao Gemini passando os parâmetros definos
		const result = await model.generateContent({
			contents: [{ role: "user", parts }],
			generationConfig,
			safetySettings,
		});

		// Ajuste a pontuação e formatação do texto gerado para bullets
		/*const response = result.response;
		resultText.value = response.text().match(/[^.!?]+[.!?]?/g).map((text) => {
			return `• ${text.trim()}`;
		});*/

		// Ajuste a pontuação e formatação do texto gerado para parágrafo
		const response = result.response;
		let formattedText = response.text().trim();
		resultText.value = [formattedText]; // Convertendo o texto em uma matriz de uma única string



		// Finaliza o loading
		stopLoading();
	}
};


onMounted(() => {
	isFullLoading.value = true;
	// Escuta mudanças no estado de autenticação
	const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
		if (currentUser) {
			isFullLoading.value = false;
			user.value = currentUser;
		} else {
			user.value = null;
			isFullLoading.value = false;
		}
	});

	// Cleanup listener quando o componente é destruído
	onUnmounted(() => {
		unsubscribe();
		isFullLoading.value = false;
	});
});
</script>

<!-- Estilos CSS -->
<style>
.drop-area {
	width: 80vw;
	height: 140px;
	border: 2px dashed rgba(255, 255, 255, .3);
	text-align: center;
	border-radius: 1em;
	cursor: pointer;
	margin: 2em 0;
	padding: 1em .5em;
	display: flex;
	align-items: center;
	justify-content: center;
}

.drop-area img {
	max-width: 100%;
	max-height: 100%;
}

button {
	margin-bottom: 2em;
	width: 80vw;
}

button:focus,
button:active {
	outline: none;
	box-shadow: none;
}

.form-btn-send {
	background-color: blueviolet;
}

.form-btn-clear {
	background-color: rgb(239, 62, 77);
}

.group-container {
	width: 80vw;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.result-text {
	width: 80vw;
	border-top: 1px solid rgba(255, 255, 255, .3);
	padding: 2em 0;
	margin-top: 2em;
	text-align: left;
	font-size: .9em;
}

.placeholder-txt {
	color: rgba(255, 255, 255, .5);
}

.title-box {
	width: 80vw;
	text-align: left;
	margin: 0;
}

.img-placeholder {
	border-radius: 8px;
}

.img-placeholder-ref {
	border-radius: 8px;
	max-width: 100px;
}

.img-ref {
	width: 100%;
	text-align: left;
	padding: 0 0 1em 74px;
}

.loading-container {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, .5);
	display: flex;
	align-items: center;
	justify-content: center;
}

.icon-pos {
	margin-right: 0.4em;
}

.form-btn-copy {
	background-color: rgba(0, 0, 0, 0);
	width: auto;
	color: white;
	font-size: .8em;
	border: none;
	padding: 0.5em 1em;
	cursor: pointer;
}

.btn-copy-txt {
	margin-left: 0.5em;
}

.btn-copy-txt-green {
	margin-left: 0.5em;
	color: greenyellow;
}

.form-btn-container {
	width: 100%;
	text-align: right;
}

.edit-area {
	width: 80vw;
	height: 200px;
	padding: 1em;
	font-size: 1em;
	border: none;
	border-radius: 0.5em;
	margin-bottom: 1em;
	line-height: 2em;
	resize: none;
}

.form-btn-edit {
	background-color: rgba(0, 0, 0, 0);
	width: auto;
	color: white;
	font-size: 0.8em;
	border: none;
	padding: 0.5em 1em;
	cursor: pointer;
	margin-left: 1em;
}

.logout-btn {
	position: fixed;
	top: 10px;
	left: 10px;
	background-color: transparent;
	color: rgb(131, 131, 131);
	font-size: .8em;
	border: none;
	cursor: pointer;
	width: 300px;
	text-decoration: underline;
	text-align: left;
}

/* Definição da animação fadeIn */
@keyframes fadeIn {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}

/* Aplicação da animação fadeIn a um elemento */
.fadeIn {
	animation: fadeIn 1s ease-in-out;
}
</style>