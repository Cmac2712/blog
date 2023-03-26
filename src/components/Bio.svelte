<script>
    import { PROFILE_DESCRIPTION, PROFILE_PIC } from "../consts";
	export let content = PROFILE_DESCRIPTION;
    export let pic = PROFILE_PIC;
    export let className = '';
</script>

<div class={`flex items-center ${className}`}>
    <img class={`rounded-full w-16 mr-2`} src={pic} alt={"Profile picture of Craig MacIntyre"}>
    <p class="text-sm text-neutral-content">{@html content}</p>
</div>