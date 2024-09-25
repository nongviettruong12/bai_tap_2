  const arr1 = [1, 2, 3, 5];

        const arr2 = ["a", "b", "c", "d"];

        const result = [];

        for (let i = 0; i < arr1.length; i++) {
          result.push({ number: arr1[i], text: arr2[i] });
        }
        console.log(result);
        const result1 = [
          {
            number: 1,
            text: "a",
          },
          {
            number: 2,
            text: "b",
          },
          {
            number: 3,
            text: "c",
          },
          {
            number: 5,
            text: "d",
          },
        ];
        const arr3 = [1, 2, 3, 5];
        const arr4 = ["a", "b", "c", "d"];
          const result2 = arr3.map((num, index)=>{
              return { text: num, age:arr4[index]}
          })
          console.log(result2);
