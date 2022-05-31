/*
const data = {
    current_user: {
        id: '<data goes here!>',
        display_name: '<data goes here!>'
    },

    message: {
        sender: {
             id: '<data goes here!>',
            display_name: '<data goes here!>'
        },
        content: '<data goes here!>'
    }
}
*/

const current = { id: 'a', display_name: 'John' }

const dtgrams = [
    {
        sender: { id: 'a', display_name: 'John' },
        contents: 'what u doing?'
    },
    {
        sender: { id: 'b', display_name: 'Iris' },
        contents: 'gaming 🎮'
    },
    {
        sender: { id: 'c', display_name: 'Plank' },
        contents: 'cooking 💦'
    },
    {
        sender: { id: 'a', display_name: 'John' },
        contents: 'Wow John 😮'
    },
    {
        sender: { id: 'a', display_name: 'John' },
        contents: 'I did not know you cook 🙂'
    },
    {
        sender: { id: 'b', display_name: 'Iris' },
        contents: 'Will you cook for us'
    },
    {
        sender: { id: 'b', display_name: 'Iris' },
        contents: 'pls'
    },
    {
        sender: { id: 'b', display_name: 'Iris' },
        contents: '💗'
    },
    {
        sender: { id: 'c', display_name: 'Plank' },
        contents: 'fo sho guys'
    },
    {
        sender: { id: 'c', display_name: 'Plank' },
        contents: 'meet me up at Saturday. Carbonara Spaghetti are coming thru'
    },
]

var datasets = []

for (let i = 0; i < dtgrams.length; i++) datasets.push(dtgrams[i])

const getData = (datano) => { return datasets[datano - 1] }
const getCurrentUser = () => { return current }
export { getData, getCurrentUser }