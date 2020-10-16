<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link rel="stylesheet" href="{{asset('css/bootstrap.min.css')}}">
        <link rel="stylesheet" href="{{asset('css/bootstrap.min.css')}}">
    </head>
    <body>


    <select id="BankDropDown">

    </select>

    <select id="GenderDropDown">

    </select>


    <select id="ListProductsDropDown">

    </select>

    <select id="RelationsDropDown">

    </select>


    <div id="mainDivCourse" class="container">
        <div class="row">
            <div class="col-md-12 p-5">

                <table id="bankTableID" class="table table-striped table-bordered" cellspacing="0" width="100%">
                    <thead>
                    <tr>
                        <th class="th-sm">BankId</th>
                        <th class="th-sm">Bank Name</th>
                    </tr>
                    </thead>
                    <tbody id="bankTable">


                    </tbody>
                </table>

            </div>
        </div>
    </div>


    <script type="text/javascript" src="{{asset('js/jquery-3.4.1.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('js/popper.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('js/bootstrap.js')}}"></script>
    <script type="text/javascript" src="{{asset('js/custom.js')}}"></script>
    <script type="text/javascript" src="{{asset('js/axios.min.js')}}"></script>
    <script type="text/javascript">
        JsonCall();
        getBankData();
    </script>
    </body>
</html>
