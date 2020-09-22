<template lang='pug'>
  button(
        class="v-button", 
        :class="{ 'v-button--primary': type === 'primary','v-button--success': type === 'success','v-button--warning': type === 'warning','v-button--danger': type === 'danger',}", 
        :disabled='disabled'
        @click="$emit('click')"
    )
    slot
</template>

<script>
export default {
  name: "VButton",

  props: {
    type: {
      type: String,
      default: "default"
    },

    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang='scss'>
@import "../../scss/variable.scss";
@import "../../scss/mixin.scss";

.v-button {
  $r: &;
  position: relative;
  display: inlne-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid $color-border;
  text-align: center;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  font-weight: 500;
  -webkit-appearance: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  transition: all 0.3s;
  @include button-hover-active(#fff, $color-text-regular, 3, 5);

  &[disabled] {
    background-color: $color-grey-light;
    border-color: $color-grey-light;
    cursor: no-drop;
  }

  + #{$r} {
    margin-left: 10px;
  }

  &--primary {
    @include button-hover-active($color-primary, #fff, 5, 5);
    &[disabled] {
      @include button-disabled($color-primary, 15);
    }
  }

  &--success {
    @include button-hover-active($color-success, #fff, 5, 5);
    &[disabled] {
      @include button-disabled($color-success, 15);
    }
  }

  &--warning {
    @include button-hover-active($color-warning, #fff, 5, 5);
    &[disabled] {
      @include button-disabled($color-warning, 15);
    }
  }

  &--danger {
    @include button-hover-active($color-danger, #fff, 5, 5);
    &[disabled] {
      @include button-disabled($color-danger, 15);
    }
  }
}
</style>
