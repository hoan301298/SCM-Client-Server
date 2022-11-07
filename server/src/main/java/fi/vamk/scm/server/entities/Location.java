package fi.vamk.scm.server.entities;

import java.io.Serializable;

import javax.persistence.*;

/**
 * The persistent class for the truck database table.
 * 
 */
@Entity
@NamedQuery(name = "Location.findAll", query = "SELECT t FROM Location t")
public class Location implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@SequenceGenerator(name = "LOCATION_ID_GENERATOR")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "LOCATION_ID_GENERATOR")
	private int id;
	private double lon;
	private double lat;
	private String name;

	public Location() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public double getLon() {
		return this.lon;
	}

	public void setLon(double lon) {
		this.lon = lon;
	}

	public double getLat() {
		return this.lat;
	}

	public void setLat(double lat) {
		this.lat = lat;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}
}