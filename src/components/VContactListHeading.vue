<template>
  <div class="contact-list-heading-container">
    <div class="name-container">
      <span class="name">
        {{ name }}
      </span>
      <DownShevronIcon />
    </div>
    <EditIcon class="edit-icon"></EditIcon>
  </div>
</template>

<script>
import EditIcon from '../assets/icons/edit.svg?inline'
import DownShevronIcon from '@/assets/icons/down_chevron.svg?inline'


export default {
  name: 'VContactListHeading',
  components: {
    EditIcon,
    DownShevronIcon,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.contact-list-heading-container {
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  height: 60px;
  align-items: center;
  border: 1px solid $color-gray;
  box-sizing: border-box;
  background-color: $color-white;
}

.name-container {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.name {
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: $color-black;
  margin-right: 9px;
}

.edit-icon, 
.name-container {
  cursor: pointer;
}
</style>
