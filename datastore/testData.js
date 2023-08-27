export const blackForestTrifle = {
    name: 'Black Forest Trifle',
    description: 'Chocolate Trifle with Cherries, Chocolate and Cream',
    ingredients: [
        { ingredient: 'Black Forest Pie Filling', quantity: 2, uom: 'TIN' },
        { ingredient: 'Flake', quantity: 1, uom: 'EACH' },
        { ingredient: 'whipping Cream', quantity: 300, uom: 'ML' },
        { ingredient: 'Chocolate Swiss Roll', quantity: 2, uom: 'EACH' },
        { ingredient: 'Sherry', quantity: 2, uom: 'DASH'},
    ],
    steps: [
        { step: 'Whip the cream', stepOrder: 1 },
        { step: 'Cut the swiss roll into 1-2cm slices', stepOrder: 2 },
        { step: 'Add a layer of swiss roll to the bottom of a large bowl', stepOrder: 3 },
        { step: 'Add a dash of sherry to soak into the swiss roll', stepOrder: 4},
        { step: 'Add a layer of pie filling', stepOrder: 5 },
        { step: 'Add a layer of Pie Filling', stepOrder: 6 },
        { step: 'Add another layer of swiss roll', stepOrder: 7 },
        { step: 'Add another dash of sherry', stepOrder: 8 },
        { step: 'Add another layer of Pie Filling', stepOrder: 9 },
        { step: 'Add the whipped cream as the top layer', stepOrder: 10 },
        { step: 'Crush the flake and sprinkle over the top', stepOrder: 11 },
    ]
};

export const fishFingerSandwich = {
    name: 'Fish Finger Sandwich',
    description: 'Fish fingers in a sandwich',
    ingredients: [
        { ingredient: 'Fish Fingers', quantity: 4, uom: 'EACH' },
        { ingredient: 'Bread', quantity: 2, uom: 'SLICE' },
        { ingredient: 'Tartar sauce', quantity: 1, uom: 'DASH' },
    ],
    steps: [
        { step: 'Preheat the oven to 200 degrees', stepOrder: 1 },
        { step: 'Cook the fish fingers for 25 minutes', stepOrder: 2 },
        { step: 'Put the fish fingers in the bread', stepOrder: 3 },
        { step: 'Add the tartar sauce', stepOrder: 4 },
        { step: 'Cut the sandwich in half', stepOrder: 5 },
    ]
};