import {Component} from '@angular/core';
import {MatrixService} from "../matrix.service";

@Component({
  selector: 'app-matrices',
  templateUrl: './matrices.component.html',
  styleUrls: ['./matrices.component.scss']
})
export class MatricesComponent {
  matrices: number[][][] = [[[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[1, 2, 3], [4, 5, 6], [7, 8, 9]]]

  resultMatrix: number[][] = [];

  constructor(private matrixService: MatrixService) {
  }

  trackByMatrix(index: number): number {
    return index;
  }

  trackByRow(index: number): number {
    return index;
  }

  trackByData(index: number): number {
    return index;
  }

  multiplyMatrices() {
    this.resultMatrix = this.matrixService.multiply(this.matrices[0], this.matrices[1]);
    console.log(this.resultMatrix)
  }

  addRow(): void {
    const newRow = Array(this.matrices[0][0].length).fill(0);
    this.matrices[0].push(newRow);

    for (let row of this.matrices[1]) {
      row.push(0);
    }
  }

  addColumn(): void {
    for (let row of this.matrices[0]) {
      row.push(0);
    }

    // Add a row to the second matrix
    const newRow = Array(this.matrices[1][0].length).fill(0);
    this.matrices[1].push(newRow);
  }

  removeRow(): void {
    if (this.matrices[0].length > 1) {
      this.matrices[0].pop();

      for (let row of this.matrices[1]) {
        row.pop();
      }
    }
  }

  removeColumn(): void {
    if (this.matrices[0][0].length > 1) {
      // Remove the last column from the first matrix
      for (let row of this.matrices[0]) {
        row.pop();
      }

      this.matrices[1].pop();
    }
  }
}
