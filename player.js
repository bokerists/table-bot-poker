
exports = module.exports = {

  VERSION: 'Superstar poker player',

  myCard: null,
  commonCards: null,
  myId: null,
  player: null,
  betValue:Infinity,

  getMyCard: function (gamestate) {
    gamestate.players.forEach( function(v){
      if(v.id == gamestate.me) {
        this.myCard = v.cards;
        this.player = v;
      }
    }.bind(this) );
  },

  getBet: function (sb) {
    if(this.isPair() && this.isPreFlop())
      return Infinity;

    if(this.isPair() )
      return Infinity;

    if(this.isThereIsFigure())
      return Infinity;

    return sb*3;
  },
  isPair: function(){
    return (this.myCard[0].rank == this.myCard[1].rank)
  },

  isPreFlop: function(){
    return (this.commonCards.length==0);
  },

  isThereIsFigure: function(){
    if(isNaN(this.myCard[0].rank) || isNaN(this.myCard[1].rank))
      return true;
  },

  bet: function (gamestate, bet) {
    'use strict';
debugger;
    // gamestate contains info about the state of the game.
    // check the documentation at https://bot-poker.herokuapp.com/wiki for further info about the data structure.

    //
    // bet is the function you should use to send your bet.

    this.myId = gamestate.me;

    this.getMyCard(gamestate);
    // enjoy the game!

    this.commonCards = gamestate.commonCards;


    this.betValue = this.getBet(gamestate.sb);


    //
    // currently we just go all-in every single hand!



    return bet(this.betValue);

  }

};
