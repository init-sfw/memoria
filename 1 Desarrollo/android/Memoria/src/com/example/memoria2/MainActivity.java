package com.example.memoria2;

import java.io.File;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;

import org.json.JSONArray;
import org.json.JSONObject;

import com.example.memoria2.R.id;

import android.os.Bundle;
import android.os.Environment;
import android.app.Activity;
import android.content.Context;
import android.view.Menu;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;
import android.view.View.OnClickListener;
import org.json.*;

public class MainActivity extends Activity {
	
	Button aceptar, cancelar;
	EditText fecha, pais, titulo, categoria;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        aceptar = (Button)findViewById(id.btnAceptar);
        cancelar = (Button)findViewById(id.btnCancelar);
        
        fecha = (EditText)findViewById(id.txtFecha);
        pais = (EditText)findViewById(id.txtPais);
        titulo = (EditText)findViewById(id.txtTitulo);
        categoria = (EditText)findViewById(id.txtCategoria);
        
        aceptar.setOnClickListener(new OnClickListener() { 
            public void onClick(View v) { 

            	
            	JSONObject obj = new JSONObject();
            	
            	
            	try {
            		
            		obj.put("fecha", fecha.getText());
                	obj.put("titulo", titulo.getText());
                	obj.put("categoria", categoria.getText());
                	obj.put("pais", pais.getText());
                	
                	FileOutputStream eventos = openFileOutput("eventos.json", Context.MODE_PRIVATE);
            		eventos.write(obj.toString().getBytes());
            		eventos.close();
            		
            		showToast("Evento creado con éxito! Bien ahí wachin!");

                	
                	String root = Environment.getExternalStorageDirectory().toString();
                	File myDir = new File(root + "/eventos");
                	myDir.mkdirs();
                	String nombre = "eventos.json";
                	
                	File file = new File(myDir, nombre);
                	if (file.exists()) file.delete();
                	
                	try {
//                		FileOutputStream out = new FileOutputStream(file);
//                		out.flush();
//                		out.close();
                		
                		FileWriter evento = new FileWriter(file);
                    	evento.append(obj.toString());
                    	evento.flush();
                    	evento.close();
                	}

            	catch (Exception e3){
            		e3.printStackTrace();
            	}
             
            	
             
            	}
            	catch (Exception e3){
            		e3.printStackTrace();
            	}
            }
            	
        }); 
    }
    
    private void showToast(String message) { 
        Toast.makeText(this, message, Toast.LENGTH_LONG).show(); 
    } 
    


    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.main, menu);
        return true;
    }
    
}
