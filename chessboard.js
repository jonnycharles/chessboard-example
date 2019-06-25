const chessboard = (num) => {
  // We want to create a function that loops through
  // values of the number for each row, alternating between
  // x and " ".  We also want to create an object that holds
  // whether or not a row starts with X or not.

  //NOTE THAT EVEN THOUGH THIS IS A CONST THAT YOU CAN CHANGE THE VALUE
  //OF THE KEY BECAUSE IT DOESN'T CHANGE THE TYPE OF OBJECT THAT IT IS!!!
  const startX = {
    valueZero: 'X',
    valueOne: ' '
  };

  // We also want to write a function that changes the value of startX after a row
  // has been created.
  const changeStartX = () => {
    // We change the first value using the ternary operator
    startX.valueZero === 'X' ? startX.valueZero = ' ' : startX.valueZero = 'X';
    // We make the second change based on the first value also using a ternary operator
    startX.valueOne === 'X' ? startX.valueOne = ' ' : startX.valueOne = 'X';
  }

  const innerLoop = (num) => {
    // I labeled it j because it will be an inner loop
    // the outer loop will use i as an incrementor.  Since it starts at 0
    // we can just have it increment until it reaches num

    // Before we start, we should instantiate a row that will be returned when
    // the loop is finished.
    let row = [];
    for (let j = 0; j < num; j++) {

      // Now we have to have a three part if statement

      // 1. We start with checking if j is 0 because you cannot define a modulo
      // with 0.
      if (j === 0) {
        row.push(startX.valueZero);
      // 2. We then check if j has a remainder of 1 when divided by 2
      } else if (j % 2 === 1) {
        row.push(startX.valueOne);
      // 3. We then check if j has a remainder of 0 when divided by 2
      } else if (j % 2 === 0) {
        row.push(startX.valueZero);
      }
    }
    // We run the changeStartX to prepare for the next row on the chess board
    // This must be done OUTSIDE THE FOR LOOP OR IT WOULD BE RUN AGAIN AND AGAIN
    changeStartX();
    // We want to convert the row from an array to a string.  We do this using join
    row.join("");
    // We return the row
    return row;
  };

  // Now that we have the inner row.  We need to run it the number of times
  // the number has been given to us to create a the full board.
  const outerLoop = (num) => {
    let finalValue = []
    // We want to run the loop every time so that we can fill the board
    for (let i = 0; i < num; i++) {
      finalValue.push(innerLoop(num));
    }
    // We join it using \n so that it formats each row as a new line
    return finalValue.join("\n");
  };

  let finale = outerLoop(num);

  // Now before I drag you through regular expressions, here is an easy loop to get
  //rid of the commas
  // You want to check for -1 because while using indexOf that means it can no longer
  // be found in the iterable
  while(finale.indexOf(',') != -1) {
    // Replace takes a string and replaces the first value it finds with the value specified
    // the loop is needed (or a regular expression) if you want to get rid of all of them.
    finale = finale.replace(',', '');
  }

  // Now we console.log it
  console.log(finale);
};

chessboard(4);
chessboard(8);
chessboard(9);
