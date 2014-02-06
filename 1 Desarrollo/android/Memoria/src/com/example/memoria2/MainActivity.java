package com.example.memoria2;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URI;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.StatusLine;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.params.CoreProtocolPNames;
import org.apache.http.util.EntityUtils;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.example.memoria2.R.id;

import android.net.ParseException;
import android.os.AsyncTask;
import android.os.Bundle;
import android.os.Environment;
import android.app.Activity;
import android.app.ListActivity;
import android.app.ProgressDialog;
import android.content.Context;
import android.util.Log;
import android.view.Menu;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListAdapter;
import android.widget.SimpleAdapter;
import android.widget.Spinner;
import android.widget.Toast;
import android.view.View.OnClickListener;
import org.json.*;
import org.json.simple.parser.JSONParser;
import org.w3c.dom.Text;

public class MainActivity extends Activity {

	Button aceptar, cancelar;
	EditText fecha, pais, titulo, categoria;
	JSONArray categories = null;
	ArrayList cat = new ArrayList<String>();
	ArrayList paises = new ArrayList<String>();
	private Spinner spinner1, spinner2;


	// Hashmap for ListView
	ArrayList<HashMap<String, String>> categorias;
	private static String url = "http://memoria-tvd.googlecode.com/svn/trunk/1%20Desarrollo/datos/categorias2.json";

	// JSON Node names
	private static final String TAG_CATEGORIES = "Categorias";
	private static final String TAG_COUNTRIES = "Paises";
	private static final String TAG_ID = "id";
	private static final String TAG_NAME = "nombre";

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		//
		//
		// com.example.memoria2.JSONParser jParser = new
		// com.example.memoria2.JSONParser();
		// String url =
		// "http://memoria-tvd.googlecode.com/svn/trunk/1%20Desarrollo/datos/categorias.json";
		// // get JSON data from URL
		// JSONArray json = jParser.getJSONFromUrl(url);
		//
		// for (int i = 0; i < json.length(); i++) {
		//
		// try {
		// JSONObject c = json.getJSONObject(i);
		// String id = c.getString("id");
		// String nombre = c.getString("nombre");
		// showToast(nombre);
		//
		// }
		// catch (JSONException e) {
		// e.printStackTrace();
		// }
		// }
		aceptar = (Button) findViewById(id.btnAceptar);
		cancelar = (Button) findViewById(id.btnCancelar);

		fecha = (EditText) findViewById(id.txtFecha);
		//pais = (EditText) findViewById(id.txtPais);
		titulo = (EditText) findViewById(id.txtTitulo);
		// categoria = (EditText)findViewById(id.txtCategoria);

		spinner1 = (Spinner) findViewById(R.id.spinner1);
		spinner2 = (Spinner) findViewById(R.id.spinner2);

		
		
		cargarCategorias();
		cargarPaises();

		aceptar.setOnClickListener(new OnClickListener() {
			public void onClick(View v) {

				String root = Environment.getExternalStorageDirectory()
						.toString();
				File myDir = new File(root + "/eventos");
				myDir.mkdirs();
				String nombre_arch = "eventos.json";
				File file = new File(myDir, nombre_arch);

				// HECHO EN ESCUELA INTI

				JSONObject obj = new JSONObject();

				try {

					obj.put("fecha", fecha.getText());
					obj.put("titulo", titulo.getText());
					obj.put("categoria", spinner1.getSelectedItem().toString());
					obj.put("pais", spinner2.getSelectedItem().toString());

					FileOutputStream eventos = openFileOutput("eventos.json",
							Context.MODE_PRIVATE);
					eventos.write(obj.toString().getBytes());
					eventos.close();

					
                	
                	try {                		
                		FileWriter evento = new FileWriter(file);
                    	evento.write(obj.toString());
                    	evento.flush();
                    	evento.close();
                    	showToast("Evento creado con éxito! Bien ahí wachin!");
                	}

            	catch (Exception e3){
            		e3.printStackTrace();
            	}
					
				} catch (Exception e) {

				}
				
			}
		});
	}

	private void showToast(String message) {
		Toast.makeText(this, message, Toast.LENGTH_LONG).show();
	}

	private void cargarPaises() {
		String jsonStr;

		String root = Environment.getExternalStorageDirectory().toString();
		File myDir = new File(root + "/eventos");
		myDir.mkdirs();
		String nombre_arch = "paises.json";
		File file = new File(myDir, nombre_arch);
		StringBuilder text = new StringBuilder();
		BufferedReader br = null;

		try {
			br = new BufferedReader(new FileReader(file));
			String line;

			while ((line = br.readLine()) != null) {
				text.append(line);
				text.append('\n');
			}
		} catch (IOException e) {
			// do exception handling
		} finally {
			try {
				br.close();
			} catch (Exception e) {
			}
		}

		jsonStr = text.toString();

		if (jsonStr != null) {
			try {
				JSONObject jsonObj = new JSONObject(jsonStr);

				// Getting JSON Array node
				categories = jsonObj.getJSONArray(TAG_COUNTRIES);

				// looping through All Contacts
				for (int i = 0; i < categories.length(); i++) {
					JSONObject c = categories.getJSONObject(i);

					String id = c.getString(TAG_ID);
					String name = c.getString(TAG_NAME);

					paises.add(name);

				}
			} catch (JSONException e) {
				e.printStackTrace();
			}
		} else {
			Log.e("ServiceHandler", "Couldn't get any data from the url");
		}

		ArrayAdapter<String> dataAdapter = new ArrayAdapter<String>(
				MainActivity.this, android.R.layout.simple_spinner_item, paises);
		dataAdapter
				.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
		spinner2.setAdapter(dataAdapter);

	}

	private void cargarCategorias() {
		String jsonStr;

		String root = Environment.getExternalStorageDirectory().toString();
		File myDir = new File(root + "/eventos");
		myDir.mkdirs();
		String nombre_arch = "categorias.json";
		File file = new File(myDir, nombre_arch);
		StringBuilder text = new StringBuilder();
		BufferedReader br = null;

		try {
			br = new BufferedReader(new FileReader(file));
			String line;

			while ((line = br.readLine()) != null) {
				text.append(line);
				text.append('\n');
			}
		} catch (IOException e) {
			// do exception handling
		} finally {
			try {
				br.close();
			} catch (Exception e) {
			}
		}

		jsonStr = text.toString();

		if (jsonStr != null) {
			try {
				JSONObject jsonObj = new JSONObject(jsonStr);

				// Getting JSON Array node
				categories = jsonObj.getJSONArray(TAG_CATEGORIES);

				// looping through All Contacts
				for (int i = 0; i < categories.length(); i++) {
					JSONObject c = categories.getJSONObject(i);

					String id = c.getString(TAG_ID);
					String name = c.getString(TAG_NAME);

					cat.add(name);

				}
			} catch (JSONException e) {
				e.printStackTrace();
			}
		} else {
			Log.e("ServiceHandler", "Couldn't get any data from the url");
		}

		ArrayAdapter<String> dataAdapter = new ArrayAdapter<String>(
				MainActivity.this, android.R.layout.simple_spinner_item, cat);
		dataAdapter
				.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
		spinner1.setAdapter(dataAdapter);
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}

}
