const midiController = {
    id: 'midi',
    name: 'Midi Controller',
    image: 'midi.png',
    description: 'A sicky lil MIDI controller for all your sick gear',
    category: 'controllers',
    price: 150,
    cost: 35
};

const distortionPedal = {
    id: 'distortion-pedal',
    name: 'Distortion Pedal',
    image: 'distortionpedal.png',
    description: 'Introduce some sick dirt into your likely already sick tone',
    category: 'pedals',
    price: 125,
    cost: 40
};

const bitcrushPedal = {
    id: 'bitcrush-pedal',
    name: 'Bitcrushing Pedal',
    image: 'bitcrushpedal.png',
    description: 'Take dem bits, take dat sample rate, and f em up!',
    category: 'pedals',
    price: 140,
    cost: 50
};

const midiToDMXController = {
    id: 'midi-to-dmx',
    name: 'MIDI To DMX Controller',
    image: 'miditodmxcontroller.png',
    description: 'An easy solution for translating MIDI CCs to the DMX protocal for killer light shows',
    category: 'controllers',
    price: 200,
    cost: 55
};

const cdjToMidiController = {
    id: 'cdj-to-midi',
    name: 'CDJ to Midi Controller',
    image: 'cdjtomidipedal.png',
    description: 'Finally, a tight solution to take timecode data from Pioneer CDJs and sync clocks with MIDI devices so you can add live synths or drums to your sick set!',
    category: 'controllers',
    price: 300,
    cost: 75
};

const midiToOSC = {
    id: 'midi-to-osc',
    name: 'Midi to OSC Controller',
    image: 'miditooscpedal.png',
    description: 'A device that allows you to connect MIDI devices to it directly and translate and then wirelessly transmit OSC messages to other controllers or your computer/patch',
    category: 'controllers',
    price: 350,
    cost: 100
};

const mutliEffectsPedal = {
    id: 'multi-effects-pedal',
    name: 'Multi Effects Pedal',
    image: 'multieffectspedal.png',
    description: 'We took a bunch of tight effects and jammed them into a box that you give us money for and then you can own it!',
    category: 'pedals',
    price: 400,
    cost: 250
};



const gear = [
    midiController,
    distortionPedal,
    bitcrushPedal,
    midiToDMXController,
    cdjToMidiController,
    midiToOSC,
    mutliEffectsPedal
];

export default gear;