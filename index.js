let data = {}
data.pronouns = ['the','our', 'your', 'tu', 'my']
data.adjs = ['great', 'big', 'tiny', 'small']
data.nouns = ['jogger','racoon', 'turtle', 'bear', 'wolf']
data.domains = ['com', 'es', 'net', 'ru', 'ar']
data.genDomains = []
data.genHacks = []

for(let pronoun of data.pronouns){
	for(let adj of data.adjs){
		for(let noun of data.nouns){
			for(let domain of data.domains){
				let word = pronoun+adj+noun
				data.genDomains.push(word+'.'+domain)
				word = word.split('')
				let shortw = word.splice(0, word.length-domain.length).join('')
				if(word.join('')===domain)data.genHacks.push(shortw+'.'+domain)
			}
		}
	}
}

console.log('Domains:', data.genDomains)
console.log('Domain Hacks:', data.genHacks)

// fs write section
fs = require('fs')
fs.writeFile('generated_domains.txt', JSON.stringify({
  Domains: data.genDomains,
  Hacks: data.genDomains
  }), err => err ? console.log(err): console.log('Saved domains')
) // Return object/dictionary and write to local .txt
