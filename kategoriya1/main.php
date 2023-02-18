<main class="catalog-page">
   
        
        
        <div class="top-block-im-page">
            <div class="top-line-warp">
                <h1>Yotoq xona mebellari</h1>
                
            </div>    
        </div>
        <div class="shop2-cookies-disabled shop2-warning hide"></div>
        <div class="catalog-warp " id="cat">

        <?php 
                $door = [
                    0 ,
                    22000000 ,
                    24000000 ,
                    21000000 ,
                    18000000 ,
                    12000000 ,
                    22000000 ,
                    19500000 ,
                    21000000 ,
                    23000000 ,
                    21000000 ,
                    12000000 ,
                    11000000 ,
                    23000000 ,
                    22000000 ,
                    26000000 ,
                    19500000 ,
                    24000000 ,
                    24000000
                    
                   
                   
                ]

            ?>

            <?php 
                for ($i=1; $i<count($door); $i++){                
            ?>
            <form  class="hot-prod-item">                
                <div class="product-body-card">
                    <a href="kategoriya1_tavar<?=$i?>.php" >
                        <div class="prod-img-title">
                            <span class="lf-lazy-img" data-original="kategoriya1/<?=$i?>.jpg"></span>
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
                            <a href="kategoriya1_tavar<?=$i?>.php">Batafsil</a>
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