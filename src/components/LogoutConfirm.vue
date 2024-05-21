<template>
    <div v-if="showOverlay" class="overlay fadeIn">
        <div class="form-container">
            <img src="../assets/icon.png" class="logo">
            <h3>Tem certeza que deseja sair?</h3>
            <p class="text-note">Fique tranquilo. Você pode voltar a qualquer momento e continuar fazendo suas
                conversões.</p>
            <div class="btn-container">
                <button class="form-button-secondary" @click="closeOverlay">Cancelar</button>
                <button class="form-button" @click="logout">sair</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { auth } from '../firebase/config.js'
import { signOut } from "firebase/auth";

const showOverlay = ref(false);
const user = ref(null);


const closeOverlay = () => {
    showOverlay.value = false;
}

// Função para logout
const logout = () => {
    signOut(auth).then(() => {
        showOverlay.value = false;
    }).catch((error) => {
        console.log(error);
    });
};

// Exporta a variável para serem acessadas pelo pai
defineExpose({
    showOverlay
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

.btn-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 1em
}

.form-button {
    background-color: blueviolet;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 150px;
}

.form-button-secondary {
    background-color: rgb(94, 86, 103);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 150px;
}

.logo {
    width: 32px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1em;
}

.text-note {
    font-size: .9em;
    padding: 0 1em;
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