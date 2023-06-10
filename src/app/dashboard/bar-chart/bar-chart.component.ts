import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product.model';
import { ChartDataset, ChartOptions } from 'chart.js';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  products!: Product;
  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe((data) => {
      this.products = data;
      this.createChart();
    });

    
  }
  chartData: ChartDataset[] = [];
  chartLabels: string[] = [];
  chartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: { stacked: true },
      y: { stacked: true },
    },
  };
  chartLegend = true;
    createChart(): void {
      const productNames: string[] = [];
    const quantityData: number[] = [];

    if (this.products && Array.isArray(this.products)) { 
    this.products.forEach((product: any) => {
      productNames.push(product.product_name);
      quantityData.push(product.quantity_order);
    });
  }

    // Définir les données du diagramme
    this.chartData = [
      {
        data: quantityData,
        label: 'Quantité commandée',
      },
    ];

    // Définir les étiquettes du diagramme
    this.chartLabels = productNames;
    }
}
