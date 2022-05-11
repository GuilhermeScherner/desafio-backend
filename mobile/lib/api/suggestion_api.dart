import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class SuggestionResponse {
  final String name;
  final double latitude;
  final double longitude;
  final double score;

  const SuggestionResponse({
    required this.name,
    required this.latitude,
    required this.longitude,
    required this.score,
  });

  static SuggestionResponse fromJson(Map<String, dynamic> json) =>
      SuggestionResponse(
        name: json['name'],
        latitude: json['latitude'],
        longitude: json['longitude'],
        score: json['score'],
      );
}

class SuggestionRequest {
  final String? q;
  final String? lat;
  final String? lon;

  const SuggestionRequest({
    this.q,
    this.lat,
    this.lon,
  });

  static Map<String, dynamic> toJson(SuggestionRequest suggestionRequest) {
    Map<String, dynamic> json = {};
    if (suggestionRequest.q != null){
      json.addAll({'q': suggestionRequest.q});
    }
    if (suggestionRequest.lat != null){
      json.addAll({'lat': suggestionRequest.lat});
    }
    if (suggestionRequest.lon != null){
      json.addAll({'lon': suggestionRequest.lon});
    }
    return json;
  }
}

class SuggestionApi {
  static Future<List<dynamic>> getUserSuggestions(
      SuggestionRequest query) async {

    dynamic queryJson = SuggestionRequest.toJson(query);
    final Uri url = Uri.http('localhost:8000', '/suggestions', queryJson);
    final response = await http.get(url);

    if (response.statusCode == 200) {
      final dynamic responseJson = json.decode(response.body);

      if(responseJson['suggestions'] == []){
        return [];
      }
      return responseJson['suggestions']
          .map((json) => SuggestionResponse.fromJson(json))
          .toList();
    } else {
      throw Exception();
    }
  }
}
