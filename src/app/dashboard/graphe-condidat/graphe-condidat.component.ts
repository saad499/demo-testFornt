import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import * as Highcharts from 'highcharts';
import HighchartsData from 'highcharts/modules/data';
import HighchartsExporting from 'highcharts/modules/exporting';
import { Product } from 'src/app/models/Product.model';

// Activez les modules Highcharts requis
HighchartsData(Highcharts);
HighchartsExporting(Highcharts);

@Component({
  selector: 'app-graphe-condidat',
  templateUrl: './graphe-condidat.component.html',
  styleUrls: ['./graphe-condidat.component.css']
})
export class GrapheCondidatComponent implements OnInit {

  products: any;
  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productService.getProduct().subscribe(data => {
      if (Array.isArray(data)) {
      this.products = data;
      this.generateChart();
      }
    });
  }

  generateChart(): void {
    const productData = this.products.map((product: { product_name: any; quantity_ordered: any; }) => ({
      name: product.product_name,
      quantity: product.quantity_ordered
    }));

    // Trier les produits par quantité décroissante
    productData.sort((a: { quantity: number; }, b: { quantity: number; }) => b.quantity - a.quantity);

    // Sélectionner les 5 premiers produits
    const topProducts = productData.slice(0, 5);

    // Créer les données pour le graphique
    const chartData = topProducts.map((product: { name: any; quantity: any; }) => ({
      name: product.name,
      y: product.quantity
    }));

    // Configurer les options du graphique Highcharts
    const chartOptions: Highcharts.Options = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Produits les plus achetés'
      },
      xAxis: {
        categories: topProducts.map((product: { name: any; }) => product.name),
        title: {
          text: 'Produits'
        }
      },
      yAxis: {
        title: {
          text: 'Quantité'
        }
      },
      series: [{
        type: 'column',
        name: 'Quantité',
        data: chartData
      }]
    };

    // Générer le graphique Highcharts
    Highcharts.chart('chart-container', chartOptions);
  }

}
