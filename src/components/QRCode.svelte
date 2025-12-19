<script>
  let qrcode = "";
  async function getQRCode(text) {
    const url =
      "https://itifbbwac6uwi3o42n4pkt3ula0lmpdk.lambda-url.eu-west-1.on.aws/";

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          input_text: text,
        }),
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();

      qrcode = result.image;
    } catch (error) {
      console.error(error.message);
    }
  }
</script>

<img src={qrcode} alt="" />
<form action="">
  <label for="input_text" class="pb-4 inline-block"
    >Add URL to convert to a QR Code</label
  >
  <br />
  <input
    class="input input-bordered w-full mb-2"
    name="input_text"
    id="input_text"
  />
  <button
    class="bg-blue-500 text-white px-4 py-2 rounded"
    on:click={(e) => {
      e.preventDefault();
      getQRCode();
    }}>Get QRCode</button
  >
</form>
