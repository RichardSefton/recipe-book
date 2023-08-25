export const validateNewRecipe = (recipe) => {
    const { name, description, ingredients, steps } = recipe;
    if (!(!!name) || !(!!description)) return { validated: false, message: "You must enter a name and description" };
    if (ingredients.length === 0) return { validated: false, message: "You must add at least one ingredient" };
    if (steps.length === 0) return { validated: false, message: 'You must add at least one step'};
    return { validated: true };
}