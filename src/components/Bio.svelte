<script>
  import { PROFILE_DESCRIPTION, PROFILE_PIC } from "../consts";
  export let pic = PROFILE_PIC;
  export let className = "";
</script>

<div class={`flex items-center ${className}`}>
  <img
    class={`rounded-full w-16 mr-2`}
    src={pic}
    alt={"Profile picture of Craig MacIntyre"}
    width={"64"}
    height={"64"}
  />
  <div>
    <p class="text-sm text-neutral-content m-0">
      {@html `Hello! I\'m Craig and I build things on the web.`}
    </p>
  </div>
</div>
