// Case 1 with array tupple
function firstCase(para: [number, string, number, string]) {
    let theReturn : string = para[0] + para[1] + para[2] + para[3];
    return  theReturn;
  }
  console.log(firstCase([1, " Type ", 3, " result "]));

  // Case 2 with object method
  function secCase1(sent: { name: string; prd: string; val: number; type:string; obj:string; }) {
    let theReturn2 : string = sent.name + " " + sent.prd + " " + sent.val + " " + sent.type + " " + sent.obj;
    return  theReturn2;

  }
  console.log(secCase1({ name: "bejo", prd: "has", val: 4, type:"sport", obj:"car"}));

  // Case 2 with union method
  function secCase2(isi: (string | number)[])
  {
      let theReturn3: any = '';
      isi.map((sent) => { theReturn3 += sent + " ";})
  
      return theReturn3;
  }
  
  console.log(secCase2(["Bejo", "has", 4, "sport", "car"]));