declare module "astro:actions" {
	type Actions = typeof import("/home/computer/LearnCard-project/space-dodger/src/actions")["server"];

	export const actions: Actions;
}