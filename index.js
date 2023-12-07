function introduction(name){
  return(`Hi, my name is ${name}.`);
}
introduction('Aki');

function introductionWithLanguage(name, language){
  return(`Hi, my name is ${name} and I am learning to program in ${language}.`)
}

introductionWithLanguage('Aki, JavaScript');



function introductionWithLanguageOptional(name = 'Gracie', language = 'JavaScript'){
  return(`Hi, my name is ${name} and I am learning to program in ${language}.`)
}

introductionWithLanguageOptional(name = 'User', 
language);
