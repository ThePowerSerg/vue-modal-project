<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{ sale: theme === 'sale' }">
            <h1>{{ header }}</h1>
            <p>{{ text }}</p>
            <slot></slot>
            <div class="actions">
                <slot name="links"></slot>
            </div>
            <slot name="modalTwo"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ModalDisplay',
        props: ['header', 'text', 'theme'],
        methods: {
            closeModal() {
                this.$emit('close')
            }
        }
    }
</script>

<style scoped>
    .modal {
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }
    .backdrop {
        top: 0;
        position: fixed;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
    }
    h1  {
        color: #03cfb4;
        border: none;
        padding: 0;
    }
    .modal.sale {
        background: black;
        color: white;
    }
    .modal.sale h1 {
        color: lime;
    }
</style>