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
        contents: 'fucking 💦'
    },
    {
        sender: { id: 'a', display_name: 'John' },
        contents: 'The heck John 🤨'
    },
    {
        sender: { id: 'a', display_name: 'John' },
        contents: 'we have kids watching this 🙂'
    },
    {
        sender: { id: 'b', display_name: 'Iris' },
        contents: 'I need to report you ⚠'
    },
    {
        sender: { id: 'b', display_name: 'Iris' },
        contents: 'you are doomed'
    },
    {
        sender: { id: 'b', display_name: 'Iris' },
        contents: 'die 😎'
    },
    {
        sender: { id: 'c', display_name: 'Plank' },
        contents: 'srsly guys?'
    },
    {
        sender: { id: 'c', display_name: 'Plank' },
        contents: 'what is wrong wit yo asses?\nespecially you John'
    },
]

var datasets = []

for (let i = 0; i < dtgrams.length; i++) datasets.push(dtgrams[i])

const getData = (datano) => { return datasets[datano - 1] }
const getCurrentUser = () => { return current }
export { getData, getCurrentUser }