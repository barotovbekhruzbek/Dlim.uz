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
                    4200000 ,
                    4500000 ,
                    4500000 ,
                    4500000 ,
                    4500000 ,
                    4500000 ,
                    4500000 ,
                    4500000 ,
                    4500000 ,
                    4000000 ,
                    4500000 ,
                    4000000 ,
                    4500000 ,
                    4500000 ,
                    4500000 ,
                    4500000 ,
                    4500000 ,
                    4500000 ,
                    4500000 ,
                    37000000 ,
                    4200000 ,
                    4200000 ,
                    3500000 ,
                    3700000 ,
                    3000000 ,
                    3000000 ,
                    4000000 ,
                    3700000 ,
                    3700000,
                    3700000,
                    3000000,
                    4200000,
                    4200000,
                    3500000,
                    
                    

                    
                    
                   
                   
                ]

            ?>

            <?php 
                for ($i=1; $i<count($door); $i++){                
            ?>
            <form  class="hot-prod-item">                
                <div class="product-body-card">
                    <a href="kategoriya4_tavar<?=$i?>.php" >
                        <div class="prod-img-title">
                            <span class="lf-lazy-img" data-original="kategoriya4/<?=$i?>.jpg"></span>
                        </div>
                        <div class="warp-price-title">
                            <div class="prod-price-title">
                                <div class="activ-price" style="margin:auto">
                                    <span class="activ-price-span"><?=$door[$i]?></span>
                                    <span class="activ-currency-title">1p/m</span>
                                </div>
                            </div>
                        </div>
                        <div class="prod-name-title">
                            <span>MDF </span>
                        </div>
                    </a>
                    
                    <div class="item-bottom">
                        <div class="itm-btm-lef-pra">
                            <a href="kategoriya4_tavar<?=$i?>.php">Batafsil</a>
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