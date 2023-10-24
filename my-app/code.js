var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["bd4f2ff0-fb80-4973-b859-ddc70b9142ed","476abb26-5dec-40ed-917c-f93c51d92d42","cdd01017-f157-43d9-9f3d-6f5c89004713","746219d4-6849-4b13-9c79-8e2020aa41d5","fb2ffcb1-3db9-415d-ad56-693c152044de"],"propsByKey":{"bd4f2ff0-fb80-4973-b859-ddc70b9142ed":{"name":"balloon","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"w7ZaGjpXrNSiOpaoqwe9W8XtSWR4m7q6","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/bd4f2ff0-fb80-4973-b859-ddc70b9142ed.png"},"476abb26-5dec-40ed-917c-f93c51d92d42":{"name":"balloon2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"dyg.JKg5PHjjf.DLS81OPQ2dVDu6CldB","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/476abb26-5dec-40ed-917c-f93c51d92d42.png"},"cdd01017-f157-43d9-9f3d-6f5c89004713":{"name":"confetti","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"tMnK6GpYp7qS5963JSLX6px.MHPpl_g3","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/cdd01017-f157-43d9-9f3d-6f5c89004713.png"},"746219d4-6849-4b13-9c79-8e2020aa41d5":{"name":"confetti2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"sPMKEnj1YwJKNhMZm531fBLiz2_7j7Zr","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/746219d4-6849-4b13-9c79-8e2020aa41d5.png"},"fb2ffcb1-3db9-415d-ad56-693c152044de":{"name":"confetti3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"MmQFtimcvYt_kTx84dV9SXM6RTbx5KFE","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/fb2ffcb1-3db9-415d-ad56-693c152044de.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var confetti = createSprite(200, 30);
confetti.setAnimation("confetti");
var confetti2 = createSprite(100, 30);
confetti2.setAnimation("confetti");
var balloon = createSprite(200, 350);
balloon.setAnimation("balloon");
var balloon2 = createSprite(100, 350);
balloon2.setAnimation("balloon");
var balloon3 = createSprite(300, 350);
balloon3.setAnimation("balloon");
balloon.scale = 1.2;
balloon2.scale = 1.2;
balloon3.scale = 1.2;
confetti.rotation = 10;
confetti2.rotation = 10;
function draw() {
  background("#5eb3ce");
  if (keyDown("up")) {
    balloon.y = balloon.y - 3;
    balloon2.y = balloon2.y - 3;
    balloon3.y = balloon3.y - 3;
  }
  if (balloon.y < -20) {
    balloon.y = 420;
  }
  if (balloon2.y < -20) {
    balloon2.y = 420;
  }
  if (balloon3.y < -20) {
    balloon3.y = 420;
  }
  if (keyDown("down")) {
    confetti.y = confetti.y + 3;
    confetti2.y = confetti2.y + 3;
  }
  if (confetti.y > 420) {
    confetti.y = -10;
  }
  if (confetti2.y > 420) {
    confetti2.y = -10;
  }
  if (mouseDown("leftButton")) {
    balloon.setAnimation("balloon2");
    balloon2.setAnimation("balloon2");
    balloon3.setAnimation("balloon2");
  }
  if (mouseDown("rightButton")) {
    balloon.setAnimation("balloon");
    balloon2.setAnimation("balloon");
    balloon3.setAnimation("balloon");
  }
  if (confetti.y > 250) {
    confetti.setAnimation("confetti2");
    confetti2.setAnimation("confetti3");
  } else {
    confetti.setAnimation("confetti");
    confetti2.setAnimation("confetti");
  }
  drawSprites();
  textSize(30);
  fill("black");
  text("HAPPY BIRTHDAY", 70, 50);
  textSize(18);
  text("Press up arrow to move balloons", 60, 70);
  text("Press down arrow to move the confetti", 50, 90);
  textSize(16);
  text("Left click to see a suprise, right click to change back", 10, 110);
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
