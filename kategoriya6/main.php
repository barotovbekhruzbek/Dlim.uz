<main class="catalog-page">
   
        
        
        <div class="top-block-im-page">
            <div class="top-line-warp">
                <h1>Oshxona mebellari</h1>
                
            </div>    
        </div>
        <div class="shop2-cookies-disabled shop2-warning hide"></div>
        <div class="catalog-warp " id="cat">
        <?php 
                $door = [
                    0 ,
                    21000000 ,
                    21000000 ,
                    16000000 ,
                    18000000 ,
                    28000000 ,
                    18500000 ,
                    27000000 ,
                    21000000,
                    17000000,
                    1100000,
                    22000000,
                    19600000,
                    23000000,
                    
                                  
                   
                ]

            ?>

            <?php 
                for ($i=1; $i<count($door); $i++){                
            ?>
            <form  class="hot-prod-item">                
                <div class="product-body-card">
                    <a href="kategoriya6_tavar<?=$i?>.php" >
                        <div class="prod-img-title">
                            <span class="lf-lazy-img" data-original="kategoriya6/<?=$i?>.jpg"></span>
                        </div>
                        <div class="warp-price-title">
                            <div class="prod-price-title">
                                <div class="activ-price" style="margin:auto">
                                    <span class="activ-price-span"><?=$door[$i]?></span>
                                    <span class="activ-currency-title">sum</span>
                                </div>
                            </div>
                        </div>
                        <div class="prod-name-title">
                            <span>MDF </span>
                        </div>
                    </a>
                    
                    <div class="item-bottom">
                        <div class="itm-btm-lef-pra">
                            <a href="kategoriya6_tavar<?=$i?>.php">Batafsil</a>
                        </div>
                        <div class="itm-btm-rgt-pra">
                            <span class="instock">Sotuvda bor</span>
                        </div>
                    </div>
                </div>                    
            </form>

            <?php                      
                }
            ?>
            
                         
        </div>
        
</main>