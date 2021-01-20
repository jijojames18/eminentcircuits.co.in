<template>
  <GmapMap :center="{ lat: 18.636954, lng: 73.829428 }" :zoom="19" map-type-id="terrain" style="height: 320px">
    <GmapMarker :position="{ lat: 18.636954, lng: 73.829428 }" :clickable="false" :draggable="false" />
  </GmapMap>
</template>

<script>
export default {
  name: 'map-component'
};
</script>
