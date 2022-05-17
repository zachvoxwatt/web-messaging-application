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


const dtgram1 = {
    current_user: {
        id: 'abc123',
        display_name: 'John'
    },

    message: {
        sender: {
             id: 'def456',
            display_name: 'Iris'
        },
        content: 'Lorem ipsum dolor sit amet'
    }
}

const dtgram2 = {
    current_user: {
        id: 'abc123',
        display_name: 'John'
    },

    message: {
        sender: {
             id: 'abc123',
            display_name: 'John'
        },
        content: '🥰💙💛😘🔥❣🧡🧡💗😍😉😙💕💟💌😚💓😊💓😚💌💟💕😙😉😍💗🧡❣🔥😘💛💙🥰❤☺💘💝💖😗💞🤗'
    }
}

const dtgram3 = {
    current_user: {
        id: 'abc123',
        display_name: 'John'
    },

    message: {
        sender: {
             id: 'def456',
            display_name: 'Iris'
        },
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt augue interdum velit. At risus viverra adipiscing at.'
    }
}

const dtgram4 = {
    current_user: {
        id: 'abc123',
        display_name: 'John'
    },

    message: {
        sender: {
             id: 'def456',
            display_name: 'Iris'
        },
        content: 'abcdefghijklmnopqrstuvwxyz'
    }
}

const dtgram5 = {
    current_user: {
        id: 'abc123',
        display_name: 'John'
    },

    message: {
        sender: {
             id: 'abc123',
            display_name: 'John'
        },
        content: 'hello'
    }
}

const dtgram6 = {
    current_user: {
        id: 'abc123',
        display_name: 'John'
    },

    message: {
        sender: {
             id: 'abc123',
            display_name: 'John'
        },
        content: 'are you there'
    }
}

var datasets = []

datasets.push(dtgram1)
datasets.push(dtgram2)
datasets.push(dtgram3)
datasets.push(dtgram4)
datasets.push(dtgram5)
datasets.push(dtgram6)

const getData = (datano) => { return datasets[datano - 1] }

export { getData }