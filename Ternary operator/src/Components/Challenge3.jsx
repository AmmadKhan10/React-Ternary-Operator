function Challenge3( {name1} ){

    let part, caffeine, age;
  if(name1 === 'tea'){
    part = 'leaf';
    caffeine= '15-70 mg/cup';
    age = '4,000+ years'
  }else{
    part = 'bean';
    caffeine= '80-185 mg/cup';
    age = '1,000+ years';
    }
    
    return(
        <div>
        <h1>{name1}</h1>
        <dl>
          <dt>Part of plant</dt>
          <dd>{part}</dd>
          <dt>Caffeine content</dt>
          <dd>{caffeine}</dd>
          <dt>Age</dt>
          <dd>{age}</dd>
        </dl>
        </div>
    )
}
export default Challenge3;