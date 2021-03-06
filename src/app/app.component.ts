﻿import { Queue } from '../renderer/queue-render';
import { ScreenModel } from '../renderer/screen-model';
import {Component, ViewChild, OnInit} from '@angular/core';
import {SimpleLine} from '../renderer/simple-line';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public threeDApp: BabylonRenderer;
  private engine: BABYLON.Engine;
  public scene: BABYLON.Scene;

  @ViewChild('renderCanvas')
  canvas: HTMLCanvasElement;

  constructor() {
  }

  ngOnInit() {
    this.startYourEngine();
    this.renderLoop();
  }

  startYourEngine() {
    const element = <HTMLCanvasElement>document.getElementById('renderCanvas');
    this.engine = new BABYLON.Engine(element);
    // this.threeDApp = new SimpleLine(element, this.engine);
    // this.threeDApp = new ScreenModel(element, this.engine);
    this.threeDApp = new Queue(element, this.engine);
    this.scene = this.threeDApp.scene;
  }

  renderLoop() {
    this.engine.runRenderLoop(() => {
      this.scene.render();
      this.threeDApp.render();
    });
  }
}
