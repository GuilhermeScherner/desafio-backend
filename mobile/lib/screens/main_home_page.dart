import 'package:flutter/material.dart';
import 'package:mobile/widget/button_widget.dart';
import 'package:mobile/widget/list_cities_widget.dart';
import 'package:mobile/api/suggestion_api.dart';
import 'package:geolocator/geolocator.dart';

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  String inputText = "";
  bool isLoading = false;
  List<dynamic> citiesList = [];
  Position? _currentPosition;

  void _onChangeInput(value) {
    setState(() {
      inputText = value;
    });
  }

  _getCurrentLocation() {
    Geolocator.getCurrentPosition(
        desiredAccuracy: LocationAccuracy.best,
        forceAndroidLocationManager: true)
        .then((Position position) {
      setState(() {
        _currentPosition = position;
      });
    }).catchError((e) {
      print(e);
    });
  }

  void _handleRequestCities() async {
    setState(() {
      isLoading = true;
    });
    SuggestionApi.getUserSuggestions(SuggestionRequest(q: inputText,
        lat: _currentPosition?.latitude.toString(),
        lon: _currentPosition?.longitude.toString())).then((result) =>
    {
      setState(() {
        citiesList = result;
        isLoading = false;
      })
    }).catchError((onError) =>
    {
      setState(() {
        isLoading = false;
      })
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          children: <Widget>[
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                verticalDirection: VerticalDirection.down,
                children: [
                  Flexible(
                    child: TextField(
                      onChanged: _onChangeInput,
                      style: const TextStyle(fontSize: 18.0),
                      decoration: const InputDecoration(
                        labelText: 'Digite uma cidade',
                      ),
                    ),
                  ),
                  Flexible(
                    child: SizedBox(
                      width: 125,
                      height: 30,
                      child: ButtonWidget(
                        text: "Pesquisar",
                        onClicked: () {
                          _handleRequestCities();
                        },
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(1.0),
                    child: SizedBox(
                      width: 125,
                      height: 30,
                      child: (_currentPosition != null)
                          ? Text(
                          "LAT: ${_currentPosition
                              ?.latitude}, LNG: ${_currentPosition?.longitude}")
                          : ElevatedButton(
                        child: const Text("Localização"),
                        onPressed: () {
                          _getCurrentLocation();
                        },
                      ),
                    ),
                  ),
                ],
              ),
            ),
            ListCitiesWidget(citiesList: citiesList, isLoading: isLoading),
          ],
        ),
      ),
    );
  }
}
