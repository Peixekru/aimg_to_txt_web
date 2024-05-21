<template>
    <div v-if="user == null" class="overlay fadeIn">
        <div class="form-container">
            <img src="../assets/icon.png" class="logo">
            <h2><span class="ai-color">AI</span>mg to txt</h2>

            <div v-if="isLoginForm" class="fadeIn">
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" v-model="email" required placeholder="Digite seu email">
                </div>
                <div class="form-group">
                    <label for="password">Senha:</label>
                    <input type="password" id="password" v-model="password" required placeholder="Digite sua senha">
                </div>
                <button class="form-button" @click="submitForm" @keydown.enter="submitForm">Login</button>
                <button class="forgot-btn" @click="isLoginForm = false; infoMessage = {}">Esqueci minha senha</button>
            </div>
            <div v-else  class="fadeIn">
                <p class="text-info-forgot">Digite seu email para receber instruções de recuperação da sua senha.</p>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" v-model="email" required placeholder="Digite seu email">
                </div>
                <button class="form-button" @click="forgotPswd" @keydown.enter="forgotPswd">Recuperar</button>
                <button class="forgot-btn" @click="isLoginForm = true; infoMessage = {}">Voltar para o login</button>
            </div>

            <p :class="infoMessage.type == 'success' ? 'success-message' : 'error-message' ">{{ infoMessage.message }}</p>


        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { auth } from '../firebase/config.js';
import { signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged } from "firebase/auth";

// Referências reativas
const showOverlay = ref(true);
const email = ref('');
const password = ref('');
const infoMessage = ref({});
const isLoginForm = ref(true);
const user = ref(null);

// Função para abrir o overlay
const openOverlay = () => {
    showOverlay.value = true;
}

// Função para fechar o overlay
const closeOverlay = () => {
    showOverlay.value = false;
}

// Função para alternar entre formulário de login e recuperação de senha
const toggleForgotPasswordForm = () => {
    isLoginForm.value = !isLoginForm.value;
    infoMessage.value = {};
}

// Função para enviar o formulário de login
const submitForm = () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Permite a entrada do usuário
            closeOverlay();
        })
        .catch((error) => {
            // Exibe mensagem de erro
            infoMessage.value = { message: "Oops... Algo deu errado!\nVerifique se os dados estão corretos.", type: "error" };
            console.log(error.message);
        });
}

// Função para enviar email de recuperação de senha
const forgotPswd = () => {
    sendPasswordResetEmail(auth, email.value)
        .then(() => {
            infoMessage.value = { message: 'E-mail enviado! Verifique sua caixa de entrada e siga as instruções para redefinir sua senha.', type: "success" };
            isLoginForm.value = true;
        })
        .catch((error) => {
            infoMessage.value = { message: 'Erro ao enviar e-mail de recuperação.', type: "error" };
            console.log(error.message);
        });
}

// Executa ao montar o componente
onMounted(() => {
    // Escuta mudanças no estado de autenticação
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        user.value = currentUser ? currentUser : null;
    });

    // Cleanup listener quando o componente é destruído
    onUnmounted(() => {
        unsubscribe();
    });
});
</script>


<style scoped>
.overlay {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    /* Fundo escuro semi-transparente */
    display: flex;
    justify-content: center;
    align-items: center;
}

.form-container {
    background-color: #1f1f1f;
    width: 360px;
    padding: 20px;
    border-radius: 8px;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    padding-left: 2.5em;
    margin-bottom: 5px;
    text-align: left;
    color: #929292;
    font-size: 0.8em;
}

input {
    width: 280px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    border: none;
}

.form-button {
    background-color: blueviolet;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 300px;
    margin-top: 1em;
}

.forgot-btn {
    background-color: transparent;
    color: rgb(131, 131, 131);
    font-size: .8em;
    border: none;
    cursor: pointer;
    width: 300px;
    text-decoration: underline;
}

.error-message {
    color: rgb(255, 123, 75);
    font-size: .8em;
    white-space: pre-line;
    /* Faz com que as quebras de linha sejam interpretadas */
}

.success-message{
    color: rgb(4, 185, 140);
    font-size: .8em;
    white-space: pre-line;
    /* Faz com que as quebras de linha sejam interpretadas */
}

.logo {
    width: 100px;
    height: 100px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1em;
}

.ai-color {
    color: #8a2be2;
}

.text-info-forgot{
    margin: 1.45em 0;
}

/* Definição da animação fadeIn */
@keyframes fadeIn {
	0% {
		opacity: 0;
		/* Inicia com opacidade zero */
	}

	100% {
		opacity: 1;
		/* Termina com opacidade máxima */
	}
}

/* Aplicação da animação fadeIn a um elemento */
.fadeIn {
	animation: fadeIn 1s ease-in-out;
	/* Duração de 0.5 segundos com transição suave */
}
</style>