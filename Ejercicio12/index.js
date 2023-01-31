const topics = ["JavaScript", "Variables", "funciones", "condicionales", "bucles"];
const topicsMayusculas = topics.map(function(topic){
    return topic.toUpperCase();
})

topicsMayusculas.reverse();

console.log('Array inicial', topics);
console.log('Array resultado', topicsMayusculas);