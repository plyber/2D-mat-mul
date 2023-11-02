import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatrixService {

  multiply(matrixA: number[][], matrixB: number[][]): number[][] {
    if (matrixA[0].length !== matrixB.length) {
      throw new Error('invalid n x m');
    }
    //Initializam matricea de rezultate cu 0
    let result:number[][]=[[]]
    for(let m = 0; m<matrixA.length; m++){
      result.push([]);
      for(let n=0;n<matrixB[0].length; n++){
        result[m].push(0);
      }
    }

    //Iteram prin fiecare rand al matricii A
    for (let i = 0; i < matrixA.length; i++) {
      //Iteram prin fiecare coloana a matricii B
      for (let j = 0; j < matrixB[0].length; j++) {
        //Iteram prin fiecare rand al rezultatului, echivalenta cu numarul de coloane din matricea A
        for (let k = 0; k < matrixA[0].length; k++) {
          //dot product
          result[i][j] += matrixA[i][k] * matrixB[k][j];
        }
      }
    }
    return result;
  }
}
