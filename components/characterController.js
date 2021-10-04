export default function characterController() {
  //60 for PRODUCTION
  const SPEED = 160;

  //80 for PRODUCTION
  const JUMP_FORCE = 200;

  return {
    id: 'characterController',
    require: ['area', 'pos'],
    listenInput() {
      if (!this.locked) {
        if (keyIsDown('right')) {
          this.move(SPEED, 0);

          switch (this._id) {
            case 19:
              this.changeSprite('player1Right')
              this.play('right')
              wait(0.7, () =>
                this.changeSprite('player1')
              )
              break;
            case 20:
              this.changeSprite('player2Right')
              this.play('right')
              wait(0.7, () =>
                this.changeSprite('player2')
              )
              break;
            case 21:
              this.changeSprite('player3Right')
              this.play('right')
              wait(0.7, () =>
                this.changeSprite('player3')
              )
              break;
          }


        }

        if (keyIsDown('left')) {
          this.move(-SPEED, 0);

          switch (this._id) {
            case 19:
              this.changeSprite('player1Left')
              this.play('left')
              wait(0.7, () =>
                this.changeSprite('player1')
              )
              break;
            case 20:
              this.changeSprite('player2Left')
              this.play('left')
              wait(0.7, () =>
                this.changeSprite('player2')
              )
              break;
            case 21:
              this.changeSprite('player3Left')
              this.play('left')
              wait(0.7, () =>
                this.changeSprite('player3')
              )
              break;
          }
        }

        if (keyIsDown('down')) {
          this.move(0, SPEED);
        }

        if (keyIsDown('up')) {
          this.move(0, -JUMP_FORCE);
        }
      }
    }
  }
}