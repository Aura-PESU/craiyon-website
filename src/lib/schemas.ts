import * as z from "zod";

export const teamLoginSchema = z.object({
  team_name: z.string().min(3).max(64),
  password: z.string().min(8).max(50),
});
export type TeamLoginSchema = z.infer<typeof teamLoginSchema>;

export const stylePresets = [
  "none",
  "3d-model",
  "analog-film",
  "anime",
  "cinematic",
  "comic-book",
  "digital-art",
  "enhance",
  "fantasy-art",
  "isometric",
  "line-art",
  "low-poly",
  "neon-punk",
  "origami",
  "photographic",
  "pixel-art",
  "texture",
  "craft-clay",
] as const;

export const imageModels = [
  "sd_xl_base_1.0.safetensors [be9edd61]",
  "dreamshaperXL10_alpha2.safetensors [c8afe2ef]",
  "dynavisionXL_0411.safetensors [c39cc051]",
  "juggernautXL_v45.safetensors [e75f5471]",
  "realismEngineSDXL_v10.safetensors [af771c3f]",
] as const;

export const imageOptsSchema = z.object({
  model: z.enum(imageModels),
  prompt: z.string().min(0).max(2000),
  negative_prompt: z.string().min(0).max(2000),
  steps: z.array(z.number().min(1).max(25)),
  cfg_scale: z.array(z.number().min(1).max(20)),
  seed: z.literal(2),
  style_preset: z.enum(stylePresets).optional(),
  sampler: z.string(),
  width: z.literal(1024),
  height: z.literal(1024),
});

export type ImageOpts = z.infer<typeof imageOptsSchema>;

export const imageEntrySchema = z.object({
  team_name: z.string().min(3).max(64),
  image_url: z.string().min(3).max(2000),
  opts: imageOptsSchema,
  created_at: z.date(),
});

export type ImageEntry = z.infer<typeof imageEntrySchema>;
