// ----------------------------------------------------------------------------
// File: Layer.js
//
// Copyright (c) 2013 VoodooJs Authors
// ----------------------------------------------------------------------------


/**
 * Enumeration for the different types of layer passes.
 *
 * @private
 * @enum {number}
 */
var LayerPass_ = {
  'Above': 0,
  'Below': 1,
  'Stencil': 2
};



/**
 * 3D layer description and content.
 *
 * A layer is essentially a render pass on a scene. Voodoo's engine
 * may create multiple layers, and each model view is instantiated on
 * each layer when the model is created. Users developing models should
 * use the layer to access the scene when they load their 3D content.
 *
 * @constructor
 * @private
 *
 * @param {LayerPass_} pass Type of graphics engine pass.
 * @param {Renderer} renderer The 3d graphics engine.
 * @param {Camera} camera This layer's virtual camera.
 * @param {Scene} scene 3D scene graph.
 * @param {Triggers} triggers 3D objects that trigger mouse events.
 */
function Layer_(pass, renderer, camera, scene, triggers) {
  log_.assert_(renderer == Renderer['ThreeJs'],
      'Only ThreeJs is supported');

  this.pass = pass;
  this.renderer = renderer;
  this.camera = camera;
  this.scene = scene;
  this.triggers = triggers;
}


/**
 * The type of rendering pass.
 *
 * @type {LayerPass_}
 */
Layer_.prototype.pass = null;


/**
 * The type of rendering engine.
 *
 * @type {Renderer}
 */
Layer_.prototype.renderer = null;


/**
 * The camera for this layer.
 *
 * @type {Camera}
 */
Layer_.prototype.camera = null;


/**
 * The scene for this layer.
 *
 * @type {Scene}
 */
Layer_.prototype.scene = null;


/**
 * The mouse event trigger object list for this layer.
 *
 * @type {Triggers}
 */
Layer_.prototype.triggers = null;
