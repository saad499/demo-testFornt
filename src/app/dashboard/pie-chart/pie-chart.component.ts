import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product.model';
import { ProductService } from 'src/app/services/product.service';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  products!: Product;
  chartData: ChartDataset[] = [];
  chartLabels: string[] = [];
  chartOptions: ChartOptions = {
    responsive: true,
  };
  chartLegend = true;
  //
  chartType: ChartType = 'pie';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe((data) => {
      this.products = data;
      this.createChart();
    });
  }

  createChart(): void {
    const interval1 = 200;
    const interval2 = 500;
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;

    if (this.products && Array.isArray(this.products)) {
      this.products.forEach((product: any) => {
        if (product.price_each <= interval1) {
          count1++;
        } else if (product.price_each <= interval2) {
          count2++;
        } else {
          count3++;
        }
      });
    }

    this.chartData = [
      {
        data: [count1, count2, count3],
        label: 'Prix par intervalle',
      },
    ];

    this.chartLabels = ['0 - 200', '200 - 500', 'Supérieur à 500'];
  }
  }
 