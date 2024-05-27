import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const output = await replicate.run(
    "cjwbw/shap-e:5957069d5c509126a73c7cb68abcddbb985aeefa4d318e7c63ec1352ce6da68c",
    {
      input: {
        image: `${imglink}`,
        save_mesh: false,
        batch_size: 1,
        render_mode: "nerf",
        render_size: 128,
        guidance_scale: 15
      }
    }
  );
  console.log(output);