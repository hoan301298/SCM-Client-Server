package fi.vamk.scm.server.entities;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the truck database table.
 * 
 */
@Entity
@NamedQuery(name="Truck.findAll", query="SELECT t FROM Truck t")
public class Truck implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@SequenceGenerator(name="TRUCK_ID_GENERATOR" )
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="TRUCK_ID_GENERATOR")
	private int id;

	@Column(name="licence_plate")
	private String licencePlate;

	private String name;

	public Truck() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getLicencePlate() {
		return this.licencePlate;
	}

	public void setLicencePlate(String licencePlate) {
		this.licencePlate = licencePlate;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

}