function hasCollided(Bullet,Wall){
    bulletRightEdge = Bullet.x;
    wallLeftEdge = Wall.x;
  
    if(bulletRightEdge>=wallLeftEdge){
  return true;
    }
    else
    {
      return false;
    }
  }