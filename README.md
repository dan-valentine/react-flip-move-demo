## Flip Move Demo

Flip move is a wonderful way to animate things that normally unanimatable, like lists. To read all about how it works check out <a href='https://medium.com/developers-writing/animating-the-unanimatable-1346a5aab3cd'>this article written by the author on medium </a>

and checkout the code here https://github.com/joshwcomeau/react-flip-move

## Installing with npm

`npm install --save react-flip-move`
or
`yarn add react-flip-move`

## implementing the FlipMove Component

Implementing flipmove is super easy! all you need is to assign a key to each value of an array and put them in the FlipMove Component! flipmove will handle all the animations for you, even on mounting and unmounting! 

```
render(){
  var bikes= this.state.bikes.map((bike, i) =>  
    <div key={bike.bikeid} className='bike-container'>
      <h1 className='bike-model'>{bike.model}</h1>
      <h2 className='bike-brand'>{bike.brand}</h2>
    </div>)
  return(
    <FlipMove>
      {bikes}
    </FlipMove>
  )
```

## Anything else I should know?

FlipMove uses refs to animate things so it will not work on functional components. Thats really all you need to know

###  I want to see I demo before I use FlipMove

That's what this is! just fork, clone, install and play!!!