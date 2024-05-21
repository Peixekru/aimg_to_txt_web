<template>
    <font-awesome-icon :icon="icon" :size="size" :color="color" />
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { defineProps } from 'vue'; // Importando defineProps para definir as props

// Definindo as props
const props = defineProps({
    // Ícone a ser usado
    icon: {
        type: [Object, Array], // Pode ser um objeto ou um array
        required: true // O ícone é obrigatório
    },
    // Tamanho do ícone
    size: {
        type: String, // O tamanho é uma string
        default: 'lg' // Tamanho padrão é 'lg'
    },
    // Cor do ícone
    color: {
        type: String, // A cor é uma string
        default: 'gray' // Cor padrão é 'black'
    }
});
</script>