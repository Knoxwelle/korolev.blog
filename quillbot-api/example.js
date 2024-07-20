const { quillbot } = require('./index')

;(async () => {
    const paragraph =
        'Never prioritize your resume over the needs of the client.'
    const options = {
        headless: false, // default 'new'
        language: 'English (US)', // default 'English (UK)'
        mode: 'Standard', // default 'Standard'
        synonymsLevel: '0', // default '50' other options are '0' or '100' (slider percentage)
    }
    const paraphrased = await quillbot(paragraph, options)

    console.log('Before:')
    console.log(paragraph)
    console.log('Paraphrased:')
    console.log(paraphrased)
	
	// Requiring fs module in which
// writeFile function is defined.
const fs = require('fs')

// Data which will write in a file.
let data = paraphrased

// Write data in 'Output.txt' .
fs.writeFile('output.txt', data, (err) => {

    // In case of a error throw err.
    if (err) throw err;
})
	
	
	
})()
