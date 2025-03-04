import 'package:flutter/material.dart';

class ButtonWidget extends StatelessWidget {
  final String text;
  final VoidCallback? onClicked;

  const ButtonWidget({
    Key? key,
    required this.text,
    this.onClicked,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) => ElevatedButton(
    child: Text(text, style: const TextStyle(fontSize: 20)),
    onPressed: onClicked,
  );
}