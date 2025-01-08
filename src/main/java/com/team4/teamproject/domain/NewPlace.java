package com.team4.teamproject.domain;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class NewPlace {
	private int place_id;
	private String place_name;
	private String place_address;
	private LocalDateTime registration_date;
	private String group_name;

}
