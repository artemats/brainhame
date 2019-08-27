<div class="wrap" data-role="wrapper">
    <h2><?php echo get_admin_page_title(); ?></h2>
    <div class="button-row">
        <div class="file-chooser">
            <button class="button"
                    data-ajax="readFromDocs"
                    data-output="result_import"><?= __( 'Read from docs' ) ?></button>

            <input type="number" data-id="per_page" value="30" min="0" max="60" />

            <input type="number" data-id="tab_index" value="0" min="0" max="4" />
        </div>
    </div>


    <div class="page_body">
        <textarea id="" class="widefat result_import" data-role="result_import" readonly></textarea>
    </div>

    <div class="test_area">
        <pre>
            <?php

//            \Theme\BrandExtension::checkBrand('Step', 'Winter');

//            \Theme\BrandExtension::wpaiPostSaved(522);

//            new \Theme\libs\GoogleSheetsApi();


            //
            //
            //            var_dump($strings);
            ?>
        </pre>
    </div>

</div>
