import 'package:flutter/material.dart';

class ListCitiesWidget extends StatefulWidget {
  const ListCitiesWidget({Key? key, required this.citiesList, required this.isLoading}) : super(key: key);
  final List<dynamic> citiesList;
  final bool isLoading;

  @override
  State<ListCitiesWidget> createState() => _ListCitiesWidgetState();
}

class _ListCitiesWidgetState extends State<ListCitiesWidget> {
  @override
  Widget build(BuildContext context) => Container(
    child: widget.isLoading ?
    const Center(
      child: CircularProgressIndicator(),
    ) :
    Flexible(
      child: ListView.builder(
        itemCount: widget.citiesList.length,
        itemBuilder: (context, index) {
          return ListTile(
            leading: const Icon(Icons.location_city),
            title: Text(widget.citiesList[index].name),
          );
        },
      ),
    ),
  );
}
