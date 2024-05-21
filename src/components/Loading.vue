<template>
    <!-- Exibe um overlay de carregamento quando isLoading é verdadeiro -->
    <div v-if="isLoading" class="loading-overlay">
        <div class="loader"></div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Declara uma variável reativa isLoading com valor inicial falso
const isLoading = ref(false);

// Função para exibir o componente Loading
const showLoading = () => {
    isLoading.value = true;
}

// Função para ocultar o componente Loading
const hideLoading = () => {
    isLoading.value = false;
}

// Expondo as funções showLoading e hideLoading para o componente pai
defineExpose({
    showLoading,
    hideLoading
});
</script>

<style scoped>
/* Estilos CSS específicos para este componente */

/* Estilos para o overlay de carregamento */
.loading-overlay {
    position: fixed; /* Fixa o elemento na tela */
    top: -10px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Fundo escuro semi-transparente */
    display: flex; /* Flex container para centralizar o loader vertical e horizontalmente */
    justify-content: center;
    align-items: center;
}

/* Estilos para o loader */
.loader {
    border: 5px solid gray; /* Borda do loader */
    border-top: 5px solid blueviolet; /* Borda superior azul */
    border-radius: 50%; /* Transforma o loader em um círculo */
    width: 20px; /* Largura */
    height: 20px; /* Altura */
    animation: spin .5s linear infinite; /* Animação de rotação */
}

/* Animação de rotação */
@keyframes spin {
    0% {
        transform: rotate(0deg); /* Inicia sem rotação */
    }
    100% {
        transform: rotate(360deg); /* Completa uma rotação de 360 graus */
    }
}
</style>
